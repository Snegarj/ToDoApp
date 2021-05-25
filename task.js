const inputbox=document.getElementById("inputbox");
const addbtn=document.getElementById("addbtn");
const container=document.getElementById("container");
const taskArray=[];
inputbox.focus();
addbtn.addEventListener("click", addtask);
inputbox.addEventListener("keyup",function(e){
  if(e. keyCode === 13){
addtask();
  };
})
//tas'
function settask()
  {   localStorage.setItem("tasks",JSON.stringify(taskArray));
 
}
function gettask(){

                  let task= localStorage.getItem("tasks");
                  if(!task){return;}
                  
                  task=JSON.parse(task);
              for(index in task){
                //           createtask(task[index]);-----obj obj  ---v from local storage nd PASSING array nd obj to create fun()
               createtask(task[index].id,task[index].value,task[index].isCompleted);
               // for save this on local storg(All task wic will store,when v come again also)
               taskArray.push(task[index]);
              }
              }
               
function addtask()
{ const userinput=inputbox.value;
  if(userinput.length==0) {return alert("Enter a task!")};
const randid=Math.random();

    let obj={};
    obj.id=randid;
obj.value=userinput;
obj.isCompleted=false;
taskArray.push(obj);

createtask(randid,userinput,false);
settask();

 
}
function createtask(randid,userinput,isCompleted)
      {  
        const task=document.createElement("div");
        task.setAttribute("class","taskcontainer");
        container.append(task);
      
       task.innerText=userinput;
       //false 1st tym -t
                              if(isCompleted) task.setAttribute("class","taskcontainer completed");
                              else {task.setAttribute("class","taskcontainer");} 
        task.addEventListener("click",handleclick);
        task.addEventListener("dblclick",dbleclick);
      }
function handleclick(){
  this.classList.toggle("completed");
                          let taskid=this.randid.toString();
                          console.log(taskid);

for(i=0;i<taskArray.length;i++)
  {
          const taskArrid=taskArray[i].id.toString();
          if(taskid === taskArrid)
          {
            taskArray[i].isCompleted=!taskArray[i].isCompleted;
  }
  // save iscompleted pro to local storage by setfun()
}
settask();
}
gettask();
function dbleclick(){

const taskAr=this.innerText;
for(i=0; i<taskArray.length;i++){
if(taskAr==taskArray[i].value){
  //splice(wic index,delCount)
  taskArray.splice(i,1);
//console.log(taskArray.length);
//UPDATE TO SET FUN
settask();
//console.log(taskArray);
}}

this.remove();
//console.log(taskArray);

}
//space not considered(
//local storage set,get-> 1st we getting then parse(string to array)
//get set tasks(key) name should b same
// use let not const becoz its chNGES
//print in gettask () get local storaae
//line 54 34 21