let gl = canvas.getContext('webgl');
gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,3,-1,-1,3,-1]), gl.STATIC_DRAW);

let pid = gl.createProgram();
shader(`attribute vec2 v;void main(void){gl_Position=vec4(v,0.,1.);}`,gl.VERTEX_SHADER);
shader(document.querySelector(`script[type="glsl"]`).textContent,gl.FRAGMENT_SHADER);
gl.linkProgram(pid);
gl.useProgram(pid);

let v = gl.getAttribLocation(pid, "v");
gl.vertexAttribPointer(v, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(v);

let resolution = gl.getUniformLocation(pid, 'resolution');
let time = gl.getUniformLocation(pid, 'time');
let fill = gl.getUniformLocation(pid, 'fill');
requestAnimationFrame(draw);

function draw(t) {
  gl.uniform1f(time, t/1000);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  requestAnimationFrame(draw);
}

function shader(src, type) {
  let sid = gl.createShader(type);
  gl.shaderSource(sid, src);
  gl.compileShader(sid);
  var message = gl.getShaderInfoLog(sid);
  gl.attachShader(pid, sid);
  if (message.length > 0) {
    console.log(src.split("\n").map((str, i) => 
       (""+(1+i)).padStart(4, "0")+": "+str).join("\n"));
    throw message;
  }
}
    
addEventListener('resize', function(){
    if (innerWidth === canvas.width && 
        innerHeight === canvas.height )
        return;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    gl.uniform2f(resolution, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
})

dispatchEvent(new Event('resize'))