import 'bootstrap/dist/css/bootstrap.css';

function Card(props) {

  function cardClasses(){
    const bgcolor = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
    const margin = props.margin? ' ' + props.margin : ' my-5 mx-auto';
    const extra = props.extra ? props.extra : '';
    return 'card' + margin + bgcolor + txt + extra;
  }

  function headerClasses(){
    const headerclasses = props.headerclasses ? ' ' + props.headerclasses : '';
    const headerbgcolor = props.headerbgcolor ? ' ' + props.headerbgcolor : '';
    const headercolor = props.headercolor ? ' ' + props.headercolor : '';
    return 'card-header text-center' + headerclasses + headerbgcolor + headercolor
  }

  const width = props.width ? ' ' + props.width : ' 18rem';
  const maxheight = props.maxheight ? ' ' + props.maxheight : ' 25rem';
  const textdisplay = props.balance ? (<h4 className="card-text">{props.text}</h4>) : (<p className="card-text">{props.text}</p>);


  return(
    <div className={cardClasses()} style={{width:width, maxHeight:maxheight}}>
      <div className={headerClasses()}>{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title text-center">{props.title}</h5>)}
        {props.text && textdisplay}
        {props.body}
        {props.status && (<div className="primary" id="createStatus">{props.status}</div>)}
      </div>
    </div>
  );
};

export default Card;