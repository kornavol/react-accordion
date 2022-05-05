import parse from 'html-react-parser'

import './style.scss'
/* A way how import an svg to the project */
import { ReactComponent as Chevron } from 'assets/icons/chevron-down.svg'

import { childNodes } from 'types/db'

interface Iprops {
  data: childNodes
  /* This is a syntax to typization an arrow function */
  onClickHandler: (id: string) => void
  show: boolean
  styles: string
}

/* We don't need to use a FC if component does't have children */
// const AccordionItem: FC<Iprops> = ({ data, onClickHandler, styles, show }) => {
const AccordionItem = ({ data, onClickHandler, styles, show }: Iprops) => {
  return (
    <li key={data.identifier} className={`${styles}-accordion-item`}>
      <div
        className="title-group"
        onClick={() => onClickHandler(data.identifier)}
      >
        <h4 className="title">
          {data?.properties?.title || <p>'So far, there are no title'</p>}
        </h4>
        <div className={`chevron ${show ? 'rotate' : ''}`}>
          <Chevron className="chevron" />
        </div>
      </div>

      <div className={`accordion-item-text ${show ? 'show' : 'hide'}`}>
        {parse(data?.properties?.text) || <p>'So far, there are no text'</p>}
      </div>
    </li>
  )
}

/* !!! We don't to need use a memo if the component is static and doesn't have children */
export default AccordionItem
// export default memo(AccordionItem)
