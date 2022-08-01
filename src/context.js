import React from 'react';

// Define context
const UserContext = React.createContext(null);

// As read in here: https://kentcdodds.com/blog/how-to-use-react-context-effectively, instead of import React and use useContext in any other child, may be better to define useContext here and export the function who defines it:
function useCtx() {
    const ctx = React.useContext(UserContext)
    if (ctx === undefined) {
      throw new Error('useContext used outside its Provider');
    }
    return ctx;
  };

// Add card template component to use across the whole application:
/* template for the card component:
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title"> Special title treatment </h5>
    <p class="card-text"> With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
*/
function Card(props) {
  function classes(){
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
    return 'card mx-auto mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "18rem"}}>
      <div className='card-header'> {props.header} </div>
      <div className='card-body border-primary'>
      {props.title && (<h5 className='card-title'> {props.title}</h5>)}
      {props.text && (<p className='card-text'> {props.text}</p>)}
      {props.body}
      {props.status && (<div id='createStatus'> {props.status}</div>)}
      </div>
    </div>
  )
}
export default UserContext;
export {useCtx, Card};
