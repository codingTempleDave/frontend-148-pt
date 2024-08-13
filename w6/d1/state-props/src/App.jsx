import './App.css'
import ClassState from './ClassState'
import ClassStateProps from './ClassStateProps'
import UseStateHook from './UseStateHook'
import FunctionCompProps from './FunctionCompProps'
import PropDrillingChild from './PropDrillingChild'
import ConditionalRender from './ConditionalRender'
import ConditionalRenderClass from './ConditionalRenderClass'
import MapArray from './MapArray'
import MapArrayClass from './MapArrayClass'

function App() {

  return (
    <>
      <h1>Class State</h1>
      <ClassState />

      <h1>Class State Props</h1>
      <ClassStateProps initialName="Iron Man" />

      <h1>useState hook</h1>
      <UseStateHook />

      <h1>Function Component with Props</h1>
      <FunctionCompProps initialName="Dude" />

      <PropDrillingChild someData="I have prop drilled" />

      <h1>Conditional Render</h1>
      <ConditionalRender initialName="Julie" customMessage="Keep it secret" />

      <h1>Conditional Render</h1>
      <ConditionalRenderClass initialName="Julie" customMessage="Keep it secret" />

      <h1>Map Array</h1>
      <MapArray />

      <h1>Map Array Class</h1>
      <MapArrayClass />
    </>
  )
}

export default App
