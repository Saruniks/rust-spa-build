FROM rust:1.78

RUN apt-get update && \
    apt-get install -y nodejs npm zip unzip && \ 
    npm install -g tailwindcss

RUN cargo install --locked trunk
RUN rustup target add wasm32-unknown-unknown 
RUN cargo install wasm-bindgen-cli@0.2.64 -f
