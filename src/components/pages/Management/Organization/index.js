import React from "react"
import { useSelector } from "react-redux"

import OrganizationForm from "./OrganizationForm"

const Organization = () => {
    const organization = useSelector(({ organization }) => organization)

    return (
        <>
            <h1 className="text-center">{organization.name}</h1>
            <OrganizationForm initialValues={organization} />
        </>
    )
}

export default Organization