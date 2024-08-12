import * as codebuild from 'aws-cdk-lib/aws-codebuild'
import { ISource, LinuxBuildImage } from 'aws-cdk-lib/aws-codebuild'
import * as pipeline from 'aws-cdk-lib/aws-codepipeline'
import * as actions from 'aws-cdk-lib/aws-codepipeline-actions'
import * as constructs from 'constructs'
import path = require('path')

export interface RustSpaBuildProps {
    source: ISource,
    buildSpec: codebuild.BuildSpec
}

export class RustSpaBuild extends constructs.Construct {
    private readonly buildOutput: pipeline.Artifact
    private readonly buildImage: codebuild.IBuildImage
    private readonly source: ISource
    private readonly buildSpec: codebuild.BuildSpec

    constructor(scope: constructs.Construct, id: string, props: RustSpaBuildProps) {
        super(scope, id)

        this.buildOutput = new pipeline.Artifact()
        this.buildImage = LinuxBuildImage.fromAsset(this, 'RustSpaBuildImage', {
            directory: path.join(__dirname, 'assets/build')
        })
        this.source = props.source
        this.buildSpec = props.buildSpec
    }

    public getCodeBuildAction = (sourceOutput: pipeline.Artifact): actions.CodeBuildAction => {
        return new actions.CodeBuildAction({
            actionName: 'RustSpaBuildAction',
            input: sourceOutput,
            project: this.createCodeBuildProject(),
            outputs: [this.buildOutput]
        })
    }

    private createCodeBuildProject = (): codebuild.PipelineProject => {
        const codeBuildProject = new codebuild.Project(this, 'RustSpaCodeBuild', {
            projectName: 'RustSpa',
            description: 'Rust Single Page Application',
            buildSpec: this.buildSpec,
            environment: {
                buildImage: this.buildImage,
                privileged: true
            },
            source: this.source
        })

        return codeBuildProject
    }

    public getBuildOutput = (): pipeline.Artifact => {
        return this.buildOutput
    }
}
