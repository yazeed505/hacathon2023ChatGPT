import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

  export function Nav(){
    return(
        <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
    )
  }