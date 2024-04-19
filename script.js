       const Uname=document.querySelector('#name');
       const number=document.querySelector('#number');
       const village=document.querySelector('#village');
       const city=document.querySelector('#city');
       const state= document.querySelector('#state');
       const saveBtn=document.querySelector('#save-btn');
       const opConatiner=document.querySelector('#output-container');
       const form=document.querySelector('form');

       let userData=JSON.parse(localStorage.getItem('User-Details')) ?? [];
       //userData is an array to store all the data in form of objects return by loacl strorage
       showData(userData);
       //showData is CALLED HERE to display the previous user details as soon as the PAGE get opens
      

        //To ADD USER DATA FUNCTION ADDING EVENT LISTENER
       form.addEventListener('submit',(e)=>{
        userData.push({
            'Name':`${Uname.value}`,
            'Number':`${number.value}`,
            'Village':`${village.value}`,
            'City':`${city.value}`,
            'State':`${state.value}`,
        })
        localStorage.setItem('User-Details',JSON.stringify(userData));
        showData(userData);//showData is used to add an updated dataentered by user
        // e.target.reset();//USED TO RESET ALL USER DETAILS AS SOON AS FORM IS SUBMITTED
        e.preventDefault();
       })


        //FUNCTION TO SHOW USER DATA ON CARDS
       function showData(userData){
        opConatiner.innerHTML='';
        userData.forEach((item,i) => {  
        const opCard=document.createElement('div');
        opConatiner.appendChild(opCard);
        opCard.classList.add('cards');
        opCard.innerHTML=`
        <p class="text-[20px] font-bold">Name :<span class="max-[400px]:text-[20px] text-[15px] min-[500px]:text-[20px] max-[800px]:block font-medium"> ${item.Name}</span></p>

        <p class="text-[20px] font-bold">Number :<span class="max-[400px]:text-[20px] text-[15px] min-[500px]:text-[20px]font-medium max-[800px]:block"> ${item.Number}</span></p>

        <p class="text-[20px] font-bold">Village :<span class="max-[400px]:text-[20px] text-[15px] min-[500px]:text-[20px] font-medium max-[800px]:block"> ${item.Village}</span></p>

        <p class="text-[20px] font-bold">City :<span class="max-[400px]:text-[20px] text-[15px] min-[500px]:text-[20px]font-medium max-[800px]:block"> ${item.City}</span></p>

        <p class="text-[20px] font-bold">State :<span class="max-[400px]:text-[20px] text-[15px] min-[500px]:text-[20px] font-medium max-[800px]:block"> ${item.State}</span></p>

        <button class="text-[20px] mt-[10px] font-bold text-black bg-white block mx-auto rounded-[7px] hover:bg-[#e1eb34] px-[20px] py-[5px] transtiton duration-200 ease-in z-19 opacity-100" onclick="removeData(${i})">Delete</button>
        `;
        });
       }
       function removeData(idx){
        userData.splice(idx,1);
        localStorage.setItem('User-Details',JSON.stringify(userData));
        showData(userData);
       }