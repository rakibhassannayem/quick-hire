import { dbConnect } from "@/lib/dbConnect";

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const query = {}

  const search = searchParams.get('searchTerm');
  const category = searchParams.get('category');

  if (category) {
    const categoryList = category.split(',');
    query.category = { $in: categoryList };
  }

  if (search) {
    query.jobTitle = { $regex: search, $options: 'i' };
  }


  const jobsCollection = await dbConnect("jobs")


  const jobs = await jobsCollection.find(query).toArray()

  return Response.json(jobs)
}

export async function POST(request) {
  const jobData = await request.json()
  const newJob = {
    ...jobData,
    createdAt: new Date()
  }

  const jobsCollection = await dbConnect("jobs")
  const result = await jobsCollection.insertOne(newJob)

  if (!result.acknowledged) {
    return Response.json({
      status: 500,
      message: "Failed to add job",
    })
  }

  return Response.json({
    status: 200,
    message: "Job added successfully",
  })
}