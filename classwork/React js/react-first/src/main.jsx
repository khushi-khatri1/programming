import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {App1,App2} from './App.jsx'
import Image from './image_src.jsx'
import Ab from './states.jsx'
import Hook_example from './Hook-intro.jsx'
import {Color} from './Hook-intro.jsx'
import Toggle from './toggle.jsx'
import Useredu from './switch.jsx'
import {reducer} from './switch.jsx'
import Week from './switchdays.jsx'
import {reduu} from './switchdays.jsx'
import Form from './form.jsx'
import Show from './user-input.jsx'
import Calc from './calculator.jsx'
import Uselife from './life-cycle.jsx'

import Routingg from './routing-path.jsx'
import Create_context from './create_context.jsx'
import { Fac } from './propes.jsx'
import Hook_hello from './another_hook.jsx'
import Example_context from './context_api1.jsx'
import User_value from './context_api2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App1 />
    <App2 />
    <Image />
    <Ab />
    <Hook_example />
    <Color />
    <Toggle />
    <Useredu />
    <Week />
    <Form />
    <Show />
    <Calc />
    <Uselife />
    <Routingg />
    <Create_context/>
    <Fac />
    <Hook_hello/>
    <Example_context>
    <User_value/>
    </Example_context>
  </StrictMode>,
)
