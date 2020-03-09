<template>
    <div>
        <canvas ref="panel" id="canvas_panel" :width="canvas_width" :height="canvas_height"></canvas>
        <br>
        <button @click="drawSomething">canvas绘制</button>
        <button @click="drawSomethingByWebGL">webgl绘制</button>
        <p>{{name}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name:'',
            canvas:null
        };
    },
    props:
    {
        canvas_width:{
            type:Number,
            default:800
        },
        canvas_height:{
            type:Number,
            default:600
        }
    },
    methods:{
        drawSomething(){
            let width = this.canvas.width;
            let height = this.canvas.height;
            const ctx = this.canvas.getContext('2d');
            ctx.lineWidth = 1;
            let beforeTime = new Date();
            let len = 100;
            for(let i=0;i<len;i++){
                let x = width*Math.random();
                let y = height*Math.random();
                let w = len*Math.random();
                let h = len*Math.random();
                ctx.strokeRect(x,y,w,h);
                //console.log(i);
            }
            let nowTime = new Date();
            let spanTime = nowTime - beforeTime;
            console.log('耗时:'+spanTime);
            // let x = width*Math.random();
            //     let y = height*Math.random();
            //     let w = len*Math.random();
            //     let h = len*Math.random();
            //     ctx.strokeRect(x,y,w,h);
        },
        initShader(gl,vertexShaderSource,fragmentShaderSource){
           let vertexShader = gl.createShader(gl.VERTEX_SHADER);
           let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
           gl.shaderSource(vertexShader,vertexShaderSource);
           gl.shaderSource(fragmentShader,fragmentShaderSource);
           gl.compileShader(vertexShader);
           gl.compileShader(fragmentShader);
           let program = gl.createProgram();
           gl.attachShader(program,vertexShader);
           gl.attachShader(program,fragmentShader);
           gl.linkProgram(program);
           gl.useProgram(program);
           return program;
        },
        drawSomethingByWebGL(){
            let gl=this.canvas.getContext('webgl');
            //顶点着色器源码
            let vertexShaderSource = '' +
            //attribute声明vec4类型变量apos
                'attribute vec4 apos;'+
                'void main(){' +
                //顶点坐标apos赋值给内置变量gl_Position
                '   gl_Position =apos;' +
                '}';
            //片元着色器源码
            let fragShaderSource = '' +
                'void main(){' +
                '   gl_FragColor = vec4(1.0,0.0,0.0,1.0);' +
                '}';
            //初始化着色器
            let program = initShader(gl,vertexShaderSource,fragShaderSource);
            //获取顶点着色器的位置变量apos              ，即aposLocation指向apos变量。
            let aposLocation = gl.getAttribLocation(program,'apos');
  
            //类型数组构造函数Float32Array创建顶点数组
            let data=new Float32Array([0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5]);
 
            //创建缓冲区对象
            let buffer=gl.createBuffer();
            //绑定缓冲区对象
            gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
            //顶点数组data数据传入缓冲区
            gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);
            //缓冲区中的数据按照一定的规律传递给位置变量apos
            gl.vertexAttribPointer(aposLocation,2,gl.FLOAT,false,0,0);
            //允许数据传递
            gl.enableVertexAttribArray(aposLocation);
        
            //开始绘制图形
            gl.drawArrays(gl.LINE_LOOP,0,4);

           function initShader(gl,vertexShaderSource,fragmentShaderSource){
           let vertexShader = gl.createShader(gl.VERTEX_SHADER);
           let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
           gl.shaderSource(vertexShader,vertexShaderSource);
           gl.shaderSource(fragmentShader,fragmentShaderSource);
           gl.compileShader(vertexShader);
           gl.compileShader(fragmentShader);
           let program = gl.createProgram();
           gl.attachShader(program,vertexShader);
           gl.attachShader(program,fragmentShader);
           gl.linkProgram(program);
           gl.useProgram(program);
           return program;
        }
        },
    },
    mounted(){
        this.canvas = this.$refs.panel;
        console.log(this.canvas);
        console.log(this.$refs.panel);

        const ctx = this.canvas.getContext('2d');
        let width = this.canvas.width;
        let height = this.canvas.height;

        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, height/2);
        ctx.lineTo(width, height/2);
        ctx.stroke();
    }
}
</script>

<style scoped>
    #canvas_panel {
      box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.5);
    }
</style>