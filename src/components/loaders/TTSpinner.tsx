import "./spinner.scss";

export default function TTSpinner({width="50px", height="50px"}:{width?:string, height?:string}) {
  return (
    <span className={`loader`} style={{width, height}}></span>
  )
}
