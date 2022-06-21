import React, { useEffect } from 'react'

interface HeadDTO {
  title: string;
  description?: string;
}

const Head = ({ title, description }: HeadDTO) => {

  useEffect(() => {
    document.title = title + ' | Barber'
    document.querySelector("meta[name='description']")?.setAttribute('content', description || '');
  }, [title, description])


  return <></>
}

export default Head