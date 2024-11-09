import React, { Component } from 'react';
import './acceuil.css'
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




function Acceuil(props) {
  
    

    
  
    const datas =[
        {
            id: 1,
            image: 'https://www.affinityhomecare.com/wp-content/uploads/2019/03/5-Reasons-to-Hire-A-Geriatric-Care-Caregiver-affinity-home-care.jpg',
            title: "Accompagnement",
            Text: `L’accompagnement des personnes âgées comporte différents aspects  : le soin, la prévention, le soutien social.`
    
        },
        {
            id: 2,
    
            image: 'https://onconormandie.fr/wp-content/uploads/2021/01/AdobeStock_384550264-2000x1200.jpeg',
            title: "Soins Oncologique de Support",
            Text: `Les soins de support doivent être accessibles à tous les patients atteints d’une maladie, quelque soit leur lieu de prise en charge`
        
        },
        {
            id: 3,
            image: 'https://marketresearch.biz/wp-content/uploads/2019/04/geriatric-care-devices-market.jpeg',
            title: "Une consultation médicale",
            Text: `Une consultation médicale est définie par la rencontre, le plus souvent dans le cadre d'un cabinet médical ou toute autre structure de soins, entre un médecin (généraliste ou spécialiste) et un patient.`
        
        }

    ]


    return (
       
        <div >
          
            
            <div className='header'>
            <div className='headerTitles'>
              <span className='headerTitlesSm'>Suivi des personnes agées </span>
            
              </div>   
              </div> 
             <div>
            <Carousel autoPlay interval={1500} 
            infiniteLoop thumbWidth={120} 
            showIndicators={false} 
            showStatus={false}>
                
          {datas.map(slide => (
              <div key={slide.id}>
                   <img src={slide.image} alt=""/>
                   
                  <div className='overlay'>
                      <h2 className='overlay_title'>{slide.title}</h2>
                      <p className='overlay_text'>{slide.Text}</p>
                  </div>
              </div>
           

          )

          )

          }
           </Carousel>
             </div>
             
     <section className='events'>
         <div className='title'>
             <h1>Upcoming Events</h1>
             <div className='line'></div>
        </div>
        <div className='container'>
        <div className='Row'>
            <div className='col'>
                <img src='https://static.fnac-static.com/multimedia/Images/FD/Comete/114332/CCP_IMG_ORIGINAL/1481839.jpg' alt=''></img>
                <h4>Everest</h4>
                <p>hff efherfhe efuefger usfhze usedgfzeyfg sdfgeyfg gefyegfeyfgseyfsb</p>
                <a href='#' className='ctn'>Learn More</a>
            </div>
            <div className='col'>
                <img src='https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg' alt=''></img>
                <h4>Everest</h4>
                <p>hff efherfhe efuefger usfhze usedgfzeyfg sdfgeyfg gefyegfeyfgseyfsb</p>
                <a href='#' className='ctn'>Learn More</a>
            </div>
            </div>
        </div>
     </section>
     <section className='explore'>
         <div className='explore-content'>
         <h1>Explore the world</h1>
         <p>hf hferuher sdfhregeus sfgseufgeq sgfseufgsjfvhbsd sdfshbsdf hkssdubsdhbfjcshjsgdghjcs hgyfgtr</p>
         </div>
         </section>
         
     <section className='tours'>
         <div className='Row'>
             <div className='col content-col'>
                 <h1>Upcoming and tours </h1>
                 <p>dhfuie jhfurhf shfuhf shdbvdhf hvdsf hfdbfvjd sdvds </p>
                 <p>dhfuie jhfurhf shfuhf shdbvdhf hvdsf hfdbfvjd sdvds </p>
                 <p>dhfuie jhfurhf shfuhf shdbvdhf hvdsf hfdbfvjd sdvds </p>
                 <p>dhfuie jhfurhf shfuhf shdbvdhf hvdsf hfdbfvjd sdvds </p>
                 <p>dhfuie jhfurhf shfuhf shdbvdhf hvdsf hfdbfvjd sdvds </p>
            </div>
            <div className='col image-col'>

                <div className='image-gallery'>
                    <img src='https://www.kiwatch.com/wp-content/uploads/2021/08/old.svg' alt=''/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png' alt=''/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png' alt=''/>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png' alt=''/>
              </div>
            </div>
        
        

         </div>
    </section>
  
    
     
        </div>
        
        
        
    );
}

export default Acceuil;