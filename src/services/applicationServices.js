"use server"

export const postJobApplication = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/applications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    throw new Error("Failed to apply!")
  }

  return res.json()
}


export const getAllApplications = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/applications`);

  return await res.json()
}