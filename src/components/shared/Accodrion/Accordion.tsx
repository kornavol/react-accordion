import { FC, memo, useState } from 'react'

import './style.scss'
import AccordionItem from './AccordItem/'

import { Idb } from 'types/db'

interface Iprops {
  data: Idb
}

const Accordion: FC<Iprops> = ({ data }) => {
  const nodes: any[] = data?.getPageById?.childNodes
  const [show, setShow] = useState<null | string>(null)
  const styles = data?.getPageById?.type

  const onClickHandler = (id: string): void => {
    if (show === id) setShow(null)
    else setShow(id)
  }

  return (
    <ul className="accordion">
      {nodes.map((node: any) => {
        const toogle: boolean = show === node.identifier ? true : false
        return (
          <AccordionItem
            data={node}
            onClickHandler={onClickHandler}
            show={toogle}
            styles={styles}
          />
        )
      })}
    </ul>
  )
}

export default memo(Accordion)
