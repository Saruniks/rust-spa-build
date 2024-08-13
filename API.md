# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RustSpaBuild <a name="RustSpaBuild" id="rust-spa-build.RustSpaBuild"></a>

#### Initializers <a name="Initializers" id="rust-spa-build.RustSpaBuild.Initializer"></a>

```typescript
import { RustSpaBuild } from 'rust-spa-build'

new RustSpaBuild(scope: Construct, id: string, props: RustSpaBuildProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rust-spa-build.RustSpaBuild.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#rust-spa-build.RustSpaBuild.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rust-spa-build.RustSpaBuild.Initializer.parameter.props">props</a></code> | <code><a href="#rust-spa-build.RustSpaBuildProps">RustSpaBuildProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rust-spa-build.RustSpaBuild.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="rust-spa-build.RustSpaBuild.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="rust-spa-build.RustSpaBuild.Initializer.parameter.props"></a>

- *Type:* <a href="#rust-spa-build.RustSpaBuildProps">RustSpaBuildProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rust-spa-build.RustSpaBuild.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rust-spa-build.RustSpaBuild.getCodeBuildAction">getCodeBuildAction</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rust-spa-build.RustSpaBuild.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `getCodeBuildAction` <a name="getCodeBuildAction" id="rust-spa-build.RustSpaBuild.getCodeBuildAction"></a>

```typescript
public getCodeBuildAction(sourceOutput: Artifact): CodeBuildAction
```

###### `sourceOutput`<sup>Required</sup> <a name="sourceOutput" id="rust-spa-build.RustSpaBuild.getCodeBuildAction.parameter.sourceOutput"></a>

- *Type:* aws-cdk-lib.aws_codepipeline.Artifact

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rust-spa-build.RustSpaBuild.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="rust-spa-build.RustSpaBuild.isConstruct"></a>

```typescript
import { RustSpaBuild } from 'rust-spa-build'

RustSpaBuild.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="rust-spa-build.RustSpaBuild.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rust-spa-build.RustSpaBuild.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rust-spa-build.RustSpaBuild.property.buildOutput">buildOutput</a></code> | <code>aws-cdk-lib.aws_codepipeline.Artifact</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rust-spa-build.RustSpaBuild.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildOutput`<sup>Required</sup> <a name="buildOutput" id="rust-spa-build.RustSpaBuild.property.buildOutput"></a>

```typescript
public readonly buildOutput: Artifact;
```

- *Type:* aws-cdk-lib.aws_codepipeline.Artifact

---


## Structs <a name="Structs" id="Structs"></a>

### RustSpaBuildProps <a name="RustSpaBuildProps" id="rust-spa-build.RustSpaBuildProps"></a>

#### Initializer <a name="Initializer" id="rust-spa-build.RustSpaBuildProps.Initializer"></a>

```typescript
import { RustSpaBuildProps } from 'rust-spa-build'

const rustSpaBuildProps: RustSpaBuildProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rust-spa-build.RustSpaBuildProps.property.buildSpec">buildSpec</a></code> | <code>aws-cdk-lib.aws_codebuild.BuildSpec</code> | *No description.* |
| <code><a href="#rust-spa-build.RustSpaBuildProps.property.projectName">projectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rust-spa-build.RustSpaBuildProps.property.source">source</a></code> | <code>aws-cdk-lib.aws_codebuild.ISource</code> | *No description.* |

---

##### `buildSpec`<sup>Required</sup> <a name="buildSpec" id="rust-spa-build.RustSpaBuildProps.property.buildSpec"></a>

```typescript
public readonly buildSpec: BuildSpec;
```

- *Type:* aws-cdk-lib.aws_codebuild.BuildSpec

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="rust-spa-build.RustSpaBuildProps.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rust-spa-build.RustSpaBuildProps.property.source"></a>

```typescript
public readonly source: ISource;
```

- *Type:* aws-cdk-lib.aws_codebuild.ISource

---



