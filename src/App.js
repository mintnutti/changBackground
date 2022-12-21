import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import home1 from './home1.png'
import bgColor1 from './bgColor1.png'
import bgColor2 from './bgColor2.png'
import bgColor3 from './bgColor3.png'
import bgColor4 from './bgColor4.png'


const Container= styled.div` 
margin-top:30px;
width:100vw ;
margin-left:30px ;
`
const DivInputHEX = styled.input` 
height:20px;
width:150px ;
`

const DivInputHEXAndText = styled.div` 
display:flex ;
flex-wrap:wrap ;
`

const DivDataImage = styled.div` 
margin-right:40px ;
`

const DivText = styled.div` 
width:100px ;
margin-bottom:20px ;
`

const DivColor = styled.div` 
width:400px;
height:400px ;
background-color:${({bg}) => bg} ;
margin-right:40px ;
`

const DivImg = styled.img` 
width:${({width}) =>width};
height:${({height}) => height};
background-color:${({bg}) => bg} ;
object-fit: cover;
background-position:top ;
`
const ButtonSelectBG = styled.div` 
padding:5px 10px;
background-color:${({bg})=> bg ? '#00b2f1':'tranparent'} ;
color:${({bg})=> bg && '#FFFFFF'} ;
border:1px #00b2f1 solid ;
width:fit-content ;
border-radius:5px ;
margin-right:10px ;
cursor: pointer;
`

const DivButtonSelectBG = styled.div` 
width:100%;
display:flex;
margin-bottom:30px ;
`
function App() {

  const [colorHex,setColorHex] = useState('')
  const [selectBT,setSelectBt] = useState(0)
  const [nameImg,setNameImg] = useState('')
  const captrueColor = () =>{
    html2canvas(document.querySelector("#capture")).then(canvas => {
      var a = document.createElement('a');
      a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      a.download = `${nameImg}.jpg`;
      a.click();
  });
  }

  const captrueImg = () =>{
    html2canvas(document.querySelector("#captureImg"), {
      allowTaint: false,
      useCORS: true,
      logging: true,
      letterRendering: 1,
    }).then(canvas => {
      const image = canvas.toDataURL('image/jpg', 1.0)
      const downloadImage = (blob) => {
        const fakeLink = window.document.createElement('a')
        fakeLink.style = 'display:none;'
        fakeLink.download = `${nameImg}Img`
      
        fakeLink.href = blob
      
        document.body.appendChild(fakeLink)
        fakeLink.click()
        document.body.removeChild(fakeLink)
      
        fakeLink.remove()
      }
      downloadImage(image)
      console.log('file',image)
    });

    html2canvas(document.querySelector("#captureHome"), {
      allowTaint: false,
      useCORS: true,
      logging: true,
      letterRendering: 1,
    }).then(canvas => {
      const image = canvas.toDataURL('image/jpg', 1.0)
      const downloadImage = (blob) => {
        const fakeLink = window.document.createElement('a')
        fakeLink.style = 'display:none;'
        fakeLink.download = `${nameImg}ImgHome`
      
        fakeLink.href = blob
      
        document.body.appendChild(fakeLink)
        fakeLink.click()
        document.body.removeChild(fakeLink)
      
        fakeLink.remove()
      }
      downloadImage(image)
      console.log('file',image)
    });
  }


  const bt = ['style 1','style 2','style 3','style 4']

  return (
    <Container>
      <DivButtonSelectBG>
        {bt.map((data,key)=>
          <ButtonSelectBG
          bg={key === selectBT && true}
          onClick={()=> setSelectBt(key)}
          >
          {data}
          </ButtonSelectBG>
        )}
      </DivButtonSelectBG>
      <DivInputHEXAndText>
      <DivDataImage>
      <DivInputHEXAndText>
        <DivText>code hex : </DivText>
      <DivInputHEX
      onChange={(e)=>setColorHex(e.target.value)}
      />
      </DivInputHEXAndText>

      <DivInputHEXAndText>
      <DivText>name : </DivText>
      <DivInputHEX onChange={(e)=>setNameImg(e.target.value)}/>
      </DivInputHEXAndText>
      <button onClick={()=> 
        {captrueColor();
        captrueImg()}}>
        save
      </button>
      </DivDataImage>

      {selectBT === 0 && 
      <DivInputHEXAndText>
      <DivColor bg={colorHex} id="capture" />
      <DivImg id="captureImg" 
      width={'800px'}
      height={'534px'}
      src={bgColor1}
      bg={colorHex}/>
      </DivInputHEXAndText>
      }

      {selectBT === 1 && 
      <DivInputHEXAndText>
      <DivColor bg={colorHex} id="capture" />
      <DivImg id="captureImg" 
      width={'463px'}
      height={'694px'}
      src={bgColor2}
      bg={colorHex}/>
      </DivInputHEXAndText>
      }

      {selectBT === 2 && 
      <DivInputHEXAndText>
      <DivColor bg={colorHex} id="capture" />
      <DivImg id="captureImg" 
      width={'400px'}
      height={'600px'}
      src={bgColor3}
      bg={colorHex}/>
      </DivInputHEXAndText>
      }

      {selectBT === 3 && 
      <DivInputHEXAndText>
      <DivColor bg={colorHex} id="capture" />
      <DivImg id="captureImg" 
      width={'400px'}
      height={'600px'}
      src={bgColor4}
      bg={colorHex}/>
      </DivInputHEXAndText>
      }

      <DivInputHEXAndText>
      <DivImg id="captureHome" 
      width={'750px'}
      height={'750px'}
      src={home1}
      bg={colorHex}/>
      </DivInputHEXAndText>
      </DivInputHEXAndText>
    </Container>
  );
}

export default App;
