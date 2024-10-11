import { useState } from 'react'

function ShakeButton() {
  const [isShaking, setIsShaking] = useState(false)

  const handleClick = () => {
    setIsShaking(true)
    setTimeout(() => setIsShaking(false), 300)
  }

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
        isShaking ? 'animate-shake' : ''
      }`}
      onClick={handleClick}
    >
      Shake Me!
    </button>
  )
}

export default ShakeButton
