// import Footer from "./components/VideoStream"
import Header from "./components/Header"
import Body from "./components/Body"
import VideoStream from "./components/Footer"
// import VideoRecorder from "./components/Streamer"
// import Streamer from "./components/Streamer"
function App() {
  return (
    <>
    <div className="bg-white-50 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md: justify-between lg:py-10">
      <Header></Header>
      <Body></Body>
      <VideoStream></VideoStream>
    </div>
    </>
  )
}

export default App
