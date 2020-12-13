export const validationEnteringData = (value, type, setValidated, key) => {
  if (type === 'email') {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(String(value).toLowerCase())) {
      setValidated(value, key)
    } else {
      return ''
    }
  } else if (type === 'tel') {
    let re = new RegExp('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')
    if (re.test(value)) {
      setValidated(value, key)
    } else {
      return ''
    }
  } else if (type === 'text') {
    setValidated(value, key)
  }
}
