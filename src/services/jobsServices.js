"use server"

export const getAllJobs = async (searchParams) => {

  const getParams = new URLSearchParams(searchParams).toString()
  // console.log("Service: ", getParams)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs?${getParams}`);

  return await res.json()
}

export const getSingleJob = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`);
  const job = await res.json();

  return job;
}

export const postJob = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    throw new Error("Failed to post new job!")
  }

  return res.json()
}

export const deleteJob = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`, {
    method: "DELETE"
  })

  if (!res.ok) {
    throw new Error("Failed to delete job!")
  }

  return res.json()
}