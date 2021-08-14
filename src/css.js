const string=`#html{
    height:100%;
    background-color: rgb(97, 141, 100);
}

.panda * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.panda *::before, *::after {
    box-sizing: border-box;
}

.panda {
    box-shadow: inset 0px 0px 50px -5px rgba(83, 78, 78, 0.45);
    background-color: rgb(29, 88, 69);
    border-radius: 50%;
    margin: auto auto;
    align-items: center;
    width: 90vh;
    height: 80vh;
    display:flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

.head {
    border-radius: 50%;
    margin: 1em auto;
    align-items: center;
    width: 55vh;
    height: 40vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    background-color: rgb(253, 253, 253);
    border: rgb(20, 20, 20) 1px solid;
    z-index: 1;
}

.nose {
    position: absolute;
    margin-left: 1vh;
    top: 22vh;
    width: 4vh;
    height: 3vh;
    background-color: rgb(0, 0, 0);
    border-radius: 50%;
}

.circle {
    position: absolute;
    top: 10vh;
    margin-left: 1.5vh;
    border-left: 11vh solid transparent;
    border-right: 2vh solid transparent;
    border-bottom: 15vh solid;
    border-radius: 50%;
}

.circleLeft {
    transform: translateX(-15vh) rotate(30deg);
}

.circleRight {
    transform: translateX(14vh) rotate(-30deg);
}

.eye {
    position: absolute;
    width: 5vh;
    height: 6vh;
    background-color: white;
    border-radius: 50%;
    border: 1px solid rgb(253, 253, 253);
}

.eyeLeft {
    transform: translateX(-5vh) translateY(5vh);
}

.eyeRight {
    transform: translateX(-9.3vh) translateY(5vh);
}

.eyeball {
    position: absolute;
    width: 3vh;
    height: 3vh;
    background-color: rgb(0, 0, 0);
    border-radius: 50%;
    border: 1px solid rgb(253, 253, 253);
}

.eyeballLeft {
    transform: translateX(0.2vh) translateY(0.6vh);
}

.eyeballRight {
    transform: translateX(0.6vh) translateY(0.2vh);
} 

.mouth {
    position: absolute;
    margin-left: 1vh;
    top: 32vh;
    width: 4vh;
    background-color: rgb(0, 0, 0);
    height:1vh;
    border: solid 1px;
    border-radius: 50%;
}

.ear {
    position: absolute;
    margin-left: 1vh;
    top: 25vh;
    width: 11vh;
    height: 9vh;
   background-color: rgb(0, 0, 0);
    border-radius: 50%;
}

.earLeft {
    transform: translateX(-21vh) translateY(-3vh);
}

.earRight {
    transform: translateX(20vh) translateY(-3vh);
}

.torso {
    position: absolute;
    width: 95%;
    height: 50%;
    background: black;
    border-radius: 50%;
    pointer-events: none;
    top: 65%;
}

.chest {
    position: absolute;
    width: 70%;
    height: 80%;
    background: white;
    border-radius: 50%;
    pointer-events: none;
    top: 30%;
    left: 12.8vh;
}

.nose:hover {
    animation: wave 0.3s infinite linear; 
}

.mouth:hover {
    animation: mouth 1s linear;
}

.panda:hover .earLeft {
    animation: earsLeft  0.4s infinite ease-in-out; 
}

.panda:hover .earRight {
    animation: earsRight  0.4s infinite ease-in-out ; 
}

.panda:hover .eyeballLeft {
    animation: eyeballLeft 4s ease-in-out infinite alternate;
  }

.panda:hover  .eyeballRight {
    animation: eyeballRight 4s ease-in-out infinite alternate;
  }

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(8deg);
    }
    66% {
        transform: rotate(-8deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

@keyframes mouth {
    20% {
        transform:  scaleY(3);
    }
    60% {
        transform: scaleY(2);
    }
    100% {
        transform: scaleY(1);
    }
}

@keyframes earsRight {
    0% {
        transform: translateX(20vh) translateY(-3vh) ;
    }
    33% {
        transform:translateX(19vh) translateY(-4vh) ;
    }
    66%{
        transform: translateX(19vh) translateY(-4vh)
    }
    100%{
        transform:translateX(20vh) translateY(-3vh)
    }
    
}

@keyframes earsLeft {
    0% {
        transform: translateX(-21vh) translateY(-3vh) ;
    }
    33% {
        transform:translateX(-20vh) translateY(-4vh) ;
    }
    66%{
        transform: translateX(-20vh) translateY(-4vh)
    }
    100%{
        transform:translateX(-21vh) translateY(-3vh)
    }
}

@keyframes eyeballLeft{
    0% {
        transform: translateX(0.2vh) translateY(0.6vh) ;
    }
    20% {
        transform:translateX(0.8vh) translateY(0.2vh) ;
    }
    40% {
        transform:translateX(1.5vh) translateY(1vh) ;
    }
    60%{
        transform: translateX(1.5vh) translateY(2vh);
    }
    80%{
        transform:translateX(0.8vh) translateY(2.5vh)
    }
    100%{
        transform: translateX(0.2vh) translateY(0.6vh) ;
    }
}

@keyframes eyeballRight{
    0% {
        transform: translateX(0.6vh) translateY(0.2vh) ;
    }
    20% {
        transform:translateX(1.2vh) translateY(0.4vh) ;
    }
    40% {
        transform:translateX(1.5vh) translateY(1.5vh) ;
    }
    60%{
        transform: translateX(1.2vh) translateY(2.5vh);
    }
    80%{
        transform:translateX(0.3vh) translateY(2.2vh)
    }
    100%{
        transform: translateX(0.6vh) translateY(0.2vh) ;
    }
}
`
export default string