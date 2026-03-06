"use server"

export const getAllJobs = async (searchParams) => {

  const getParams = new URLSearchParams(searchParams).toString()
  // console.log("Service: ", getParams)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs?${getParams}`);

  return await res.json()
}