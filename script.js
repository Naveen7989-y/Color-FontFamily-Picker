const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow', 'pink', 'brown', 'gray', 'black', 'white', 'cyan', 'magenta', 'lime', 'maroon', 'navy', 'olive', 'teal', 'violet', 'gold', 'silver', 'beige', 'coral', 'crimson', 'indigo', 'khaki', 'lavender', 'plum'];
const fonts = ['Arial', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia', 'Palatino', 'Garamond', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact'];

        const colorContainer = document.getElementById('colorContainer');
        const fontSelector=document.getElementById('fontSelector');
        const colorContainer2 =document.getElementById('colorContainer2');
        const textcontainer=document.getElementById('textcontainer');


        colors.forEach((color,index) => {
          const div=document.createElement('div');
        //  const btn=document.createElement('button');
          div.className='color-box';
          
          div.id='color-box';
          colorContainer.appendChild(div);
          div.style.backgroundColor=color;
          div.onclick=() =>changefontcolor(color);

         // colorContainer.appendChild(btn);//
          console.log(div);
        });
        

        function changefontcolor(color){

          textcontainer.style.color=color;
        }

        /*const colorbox=document.getElementById('color-box');
        colorbox.addEventListener('click',() =>{
          colorbox.style.backgroundColor+=textcontainer.style.color;
            console.log(textcontainer.style);
        });*/

        colors.forEach(color=>{
            const div2=document.createElement('div');
            div2.className='color-box2';
            div2.style.backgroundColor=color;
          
            div2.onclick=()=>changebgcolor(color);
            colorContainer2.appendChild(div2);
        });
        function changebgcolor(color){
          textcontainer.style.backgroundColor=color;
        }

        fonts.forEach(font=>{
            const div=document.createElement('div');
            div.clasName='fontoption';
            div.style.backgroundColor='#C9D6DF';
            div.style.marginTop='-1.5px';
            div.style.cursor='pointer';
            div.textContent=font;
            div.onclick=()=>changefont(font);
            fontSelector.appendChild(div);

        });
        function changefont(font){
          textcontainer.style.fontFamily=font;
        }
        fontSelector.style.border='10px solid black';
        fontSelector.style.borderRadius='10px'