import TTSpinner from "./TTSpinner";


export default function LoadingScreen() {
  return (
    <div className="w-full h-full min-h-screen animate-pulse flex justify-center items-center">
        <TTSpinner/>
    </div>
  )
}
