import React from "react";
import "./style.css"

class Todo extends React.Component{
        constructor(){
            super()
            this.state={
                ontype:"",
                list:Object.values(JSON.parse( localStorage.getItem('MyList')))
            }
               this.handleSubmit= this.handleSubmit.bind(this);
               this.handleEvent= this.handleEvent.bind(this);
               this.handleDel= this.handleDel.bind(this);
               this.handleEdit= this.handleEdit.bind(this);
               
               
            
        }
       
        handleSubmit(e){
            e.preventDefault();
            
           // this.ontype= e.target.value;
          // console.log((this.ontype)=="")
           //if((this.ontype).length==0) return;
           const obj={
               id:new Date().getTime().toString(),
               val: this.state.ontype
           }

            const arr=this.state.list;
            arr.push(obj);
            console.log(this.state.list);
            this.setState({list:arr});
            this.setState({ontype:" "}) ;
            localStorage.setItem('MyList', JSON.stringify(arr));
            document.getElementById("text").value="";
            console.log(typeof Object.values(JSON.parse( localStorage.getItem('MyList'))))
        }
        handleEvent(e){
        this.setState({ontype:e.target.value}) ;
        
        }
        handleDel(e){
            const c= this.state.list.filter((currele)=>{
                return e!==currele.id;
            })
            this.setState({list:c});
            localStorage.setItem('MyList', JSON.stringify(c));
            console.log(e.val);
        }
        handleEdit(e){
           // document.getElementById("submit").value="Edit";
            console.log(document.getElementById("submit").value)
           this.setState({ontype:e.val},()=>{
               document.getElementById("text").value=this.state.ontype;
               
           });
          this.handleDel(e.id);
       //console.log(this.state.list)

          
                
    
        }
      

    render(){
        return(
        <>
        <main>
            
        
           
            <form>
            <div className="list-add">
                <input type="text" id="text"
                        value={this.ontype}
                        placeholder="✍️ Enter Task"
                        onChange={this.handleEvent}
                        className="input"
                       
                 />

               
                     <input type="submit"
                            className="addButton "
                            value="Add Task"
                
                            onClick={this.handleSubmit}
                    />
                 
            </div>
            </form>
            <div className="container">
            <div className="list-name" id="list">
                <i className="fa-solid fa-list-check"> My Task</i>
                {(this.state.list).map(val =>(
                         <div className="list" key={val.id}>
                         <span>  {val.val}</span> <span type="button" class="fa-solid fa-pen-to-square"onClick={()=> this.handleEdit(val)}></span>  <span type="button"  class="fa-solid fa-trash-can" onClick={()=>this.handleDel(val.id)}></span>
                     </div>

                ))}
               
            </div>
        </div>  
        </main>
        
        
        
        
        
        </>








        )
    }
}
export default Todo;