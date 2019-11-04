import uuidv4 from 'uuid/v4'

export default (length, label) =>
  Array.from({ length }, (e, i) => ({
    label: `${label}${i + 1}`,
    value: uuidv4(),
  }))
