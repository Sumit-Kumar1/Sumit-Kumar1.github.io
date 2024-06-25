export default function Card(props) {
  return (
    <div className="card card-side bg-base-10 shadow-xl p-2">
      <p className="radial-progress m-auto text-accent" style={{"--value":props.percent}} role="progress">
        <span className="text-2xl stat-value">{props.percent}%</span>
      </p>
      <div className="card-body">
        <div className="card-title justify-end text-primary">{props.icon}</div>
        <h2 className="card-title text-primary">{props.text}</h2>
        <p className="">{props.expLevel}, {props.exp}</p>
      </div>
    </div>
  );
}