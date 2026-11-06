# Coffee Delivery

### Important Skills:
<ul>
  <li>React</li>
  <li>Tailwind CSS</li>
  <li>TanStack Router (file-based routing)</li>
  <li>useReducer from React</li>
  <li>Layout component shared</li>
  <li>In-browser AI chat assistant (Transformers.js + Qwen2.5-0.5B-Instruct, running locally on WebGPU)</li>
</ul>

### AI chat assistant

The chat assistant runs the model [`onnx-community/Qwen2.5-0.5B-Instruct`](https://huggingface.co/onnx-community/Qwen2.5-0.5B-Instruct) entirely in the browser with [Transformers.js](https://huggingface.co/docs/transformers.js), inside a Web Worker. No server or API key is needed.

- **WebGPU only:** the chat is hidden in browsers without WebGPU.
- **Download:** the model (about 0.5 to 0.8 GB, depending on the GPU) is downloaded on the first activation and kept in the browser's Cache Storage.
- **Weights:** `q4f16` when the GPU supports `shader-f16`, otherwise `q4`.

### Home

<div 
    style="
        display: flex; 
        align-items: center; 
        justify-content: center;
        margin: 10px 0 60px 0;
    "
>
  <img src="./docs/home.png" />
</div>

### Cart

<div 
    style="
        display: flex; 
        align-items: center; 
        justify-content: center;
        margin: 10px 0 60px 0;
    "
>
  <img src="./docs/cart.png" />
</div>
