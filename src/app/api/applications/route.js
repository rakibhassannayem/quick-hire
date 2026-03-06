import { dbConnect } from "@/lib/dbConnect"

export async function POST(request) {
  const applyData = await request.json()
  const newApplication = {
    ...applyData,
    createdAt: new Date()
  }

  const applicationCollection = await dbConnect("applications")
  const result = await applicationCollection.insertOne(newApplication)

  if (!result.acknowledged) {
    return Response.json({
      status: 500,
      message: "Failed to Apply!",
    })
  }

  return Response.json({
    status: 200,
    message: "Application sent successfully!",
  })
}