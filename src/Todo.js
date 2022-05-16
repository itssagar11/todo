import React from "react";

class Todo extends React.Component{
        constructor(){
            super()
            this.state={
                ontype:"",
                list:[]
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
            document.getElementById("text").value="";
        }
        handleEvent(e){
        this.setState({ontype:e.target.value}) ;
        
        }
        handleDel(e){
            const c= this.state.list.filter((currele)=>{
                return e!==currele.id;
            })
            this.setState({list:c});
            console.log(e.val);
        }
        handleEdit(e){
           // document.getElementById("submit").value="Edit";
            console.log(document.getElementById("submit").value)
           this.setState({ontype:e.val},()=>{
               document.getElementById("text").value=this.state.ontype;
               
           });
          
       this. handleDel(e.id);
       //console.log(this.state.list)

          
                
    
        }
      

    render(){
        return(
        <>
        <div className="container">
            <div className="logo">
                <figure>
                    <img src="" alt="" className=""/>
                    <figcaption> My List</figcaption>
                </figure>
            </div>
            <form>
            <div className="list-add">
                <input type="text" id="text"
                        value={this.ontype}
                        placeholder="✍️ Add new list"
                        onChange={this.handleEvent}
                       
                 />

                 <div className="AddButton" id="submit">
                     <input type="submit"
                            className="addButton"
                            value="Add"
                
                            onClick={this.handleSubmit}
                    />
                     
                </div>     
            </div>
            </form>
            <div className="list-name" id="list">
                {(this.state.list).map(val =>(
                         <div className="list" key={val.id}>
                         <span>  {val.val}</span> <span type="button"onClick={()=> this.handleEdit(val)}> Edit</span>  <span type="button" onClick={()=>this.handleDel(val.id)}> Delete</span>
                     </div>

                ))}
               
            </div>
        </div>  
        
        
        
        
        
        
        </>








        )
    }
}
export default Todo;