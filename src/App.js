import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      datas:[],
      act:0,
      index:''

    }
  }

  fSubmit = (e)=>{  
    e.preventDefault();
    let datas =this.state.datas;
    let name = this.refs .name.value;
    let author=this.refs.author.value;
    let description=this.refs.description.value;

    if(this.state.act === 0)
    {
      let newdata={
        "name":name,
        "author":author,
        "description":description
      }
  
      datas.push(newdata);
    }
    else{
      let index=this.state.index;
      datas[index].nam=name;
      datas[index].autor=author;
      datas[index].desc=description;
    }
    this.setState({
      datas: datas
    })
    this.refs.myForm.reset();
  }

  fRemove = (i)=>{
  
    let datas =this.state.datas;
   datas.splice(i,1);
   this.setState({
     datas: datas
   });
   this.myForm.reset();
  }

  fEdit =(i)=>{
  
    let datas=this.state.datas[i];
    this.refs.name.value= datas.name;
    this.refs.author.value=datas.author;
    this.refs.description.value=datas.description;
    this.setState({
      datas:datas,
      act:1,
      index:i
    })
    console.log(i);

  }
  render(){
    let datas =this.state.datas;
    return (
      <div className="App">
        <h2>CRUD BOOK</h2>    
        <table className='table'>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          {
          datas.map((data,i)=>
         <tr key={i}>
          <td>{data.name}</td>
          <td>{data.author}</td>
          <td>{data.description}</td>
          <td>
           <button onClick={i =>this.fEdit(i)} className="myButton">Edit</button>
           </td>
          <td>
           <button onClick={i => this.fRemove(i)} className="myButton">Remove</button>
           </td>
           </tr>
         )}
        </table>
        <form ref="myForm" className="myForm">
          <label> Name</label>
          <input type="text" ref="name" placeholder="Name" className="formField" />
          <label>Author</label>
            <input type="text" ref="author" placeholder="Author " className="formField" />
            <label>Description</label>
          <input type="text" ref="description" placeholder="Description " className="formField" />
          <button onClick={e => this.fSubmit(e)} className="myButton">Submit</button>
        </form>
        </div>
    )

  }
  
}

export default App;
