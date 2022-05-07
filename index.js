let pymnt = [];

const pay = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let payment = {
        id: new Date(),
        amount: document.getElementById('amount1').value,
        
    }

    pymnt.push(pay);

            //for display purposes only
            console.warn('added' , {pymnt} );
            console.warn(payment);
    
    const page1 = document.getElementById('1stpage');
    page1.remove();

    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
      ]
    const d = new Date();
    const monthIndex = d.getMonth()
    const monthName = months[monthIndex]
    const year = d.getFullYear()
    const date = ('0' + d.getDate() ).slice(-2)
    const hour = ('0' + d.getHours() % 12 ).slice(-2)
    const minute = d.getMinutes()
    const rupee = payment['amount']
    console.log(monthName,year,date,hour,minute,rupee)
    let half = "pm";
    if(d.getHours()/12 < 0 ){
        half = "am";
    }



    document.getElementById("secondpage").style.visibility = "visible";
    document.getElementById("time1").innerHTML="Paid successfully at "+hour+":"+minute+" "+half;
    document.getElementById("date1").innerHTML="on " + date +" "+ monthName + " " + year;
    document.getElementById("rs1").innerHTML="₹"+rupee;
}


const pay2 = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let payment = {
        id: new Date(),
        amount: document.getElementById('amount2').value,
        
    }

    pymnt.push(pay);

            //for display purposes only
            console.warn('added' , {pymnt} );
            console.warn(payment);
    
    const page1 = document.getElementById('1stpage');
    page1.remove();

    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
      ]
    const d = new Date();
    const monthIndex = d.getMonth()
    const monthName = months[monthIndex]
    const year = d.getFullYear()
    const date = ('0' + d.getDate() ).slice(-2)
    const hour = ('0' + d.getHours() % 12 ).slice(-2)
    const minute =('0' + d.getMinutes() ).slice(-2)
    const rupee = payment['amount']
    console.log(monthName,year,date,hour,minute,rupee)
    let half = "pm";
    if(d.getHours()/12 < 0 ){
        half = "am";
    }



    document.getElementById("secondpage").style.visibility = "visible";
    document.getElementById("time1").innerHTML="Paid successfully at "+hour+":"+minute+" "+half;
    document.getElementById("date1").innerHTML="on " + date +" "+ monthName + " " + year;
    document.getElementById("rs1").innerHTML="₹"+rupee;
}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('submitbtn1').addEventListener('click', pay);
    document.getElementById('submitbtn2').addEventListener('click', pay2);
});
