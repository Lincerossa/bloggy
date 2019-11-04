import React, { useState, useEffect } from 'react'
import * as S from './styles'

/**
 *
 * **/

export default ({ children, activeIds = [], onChangeAccoridionSection }) => {
  const [openSections, setOpenSections] = useState(activeIds)
  const sectionsNumber = React.Children.count(children)

  const handleOpenAccordion = accordionIndex => {
    const sectionIndex = openSections.findIndex(e => e === accordionIndex)
    if (sectionIndex > -1) {
      setOpenSections([
        ...openSections.slice(0, sectionIndex),
        ...openSections.slice(sectionIndex + 1),
      ])
      return
    }

    setOpenSections([...openSections, accordionIndex])
  }

  useEffect(() => {
    if (onChangeAccoridionSection) {
      onChangeAccoridionSection(openSections)
    }
  }, [openSections])

  return (
    <S.Accordion>
      {React.Children.map(children, ({ props: { label, children } }, index) => {
        const isOpen = openSections.findIndex(e => e === index) > -1

        return (
          <S.AccordionSection
            key={index}
            isOpen={isOpen}
            isLast={sectionsNumber - 1 === index}
          >
            <S.AccordionHead onClick={() => handleOpenAccordion(index)}>
              {label}
            </S.AccordionHead>
            {isOpen && <S.AccordionBody>{children}</S.AccordionBody>}
          </S.AccordionSection>
        )
      })}
    </S.Accordion>
  )
}
