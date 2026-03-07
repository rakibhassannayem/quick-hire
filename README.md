# Quick Hire - Modern Job Portal Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://quick-hire-rakib.vercel.app/)

**Quick Hire** is a powerful and modern job portal platform built with Next.js 16. It connects job seekers with startups and established companies, offering a seamless experience for finding and posting jobs.

## 🚀 Key Features

- **Advanced Job Search**: Filter jobs by title, keywords, and location.
- **Featured & Latest Jobs**: Stay updated with the most relevant and recent job openings.
- **Company & Category Browsing**: Discover opportunities by exploring top companies and job categories.
- **Admin Dashboard**: Comprehensive dashboard for employers and admins to manage job postings.
- **Newsletter Subscription**: Integrated newsletter to keep users informed about new opportunities.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Fast Performance**: Leverages Next.js 16 features for speed and SEO.

## 🛠️ Tech Stack

- **Frontend**: [Next.js 16](https://nextjs.org/), [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [DaisyUI 5](https://daisyui.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: [Google Fonts (Epilogue, Space Grotesk)](https://fonts.google.com/)

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- MongoDB account (for database connection)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rakibhassannayem/quick-hire.git
   cd quick-hire
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   MONGODB_URI=your_mongodb_connection_string
   DB_NAME=quick_hire_db
   ```
   *(See [.env.example](.env.example) for more details)*

### Running Locally

To start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## 🔑 Environment Variables

| Variable | Description |
| :--- | :--- |
| `NEXT_PUBLIC_API_URL` | The base URL for the API (usually http://localhost:3000 for local dev). |
| `MONGODB_URI` | Your MongoDB connection string. |
| `DB_NAME` | The name of the database to use. |

---

## 📄 License

This project is private and intended for specific job task purposes.

---

Built with ❤️ by [Rakib Hassan](https://github.com/rakibhassannayem)
