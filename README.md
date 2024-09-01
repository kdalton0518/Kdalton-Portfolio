<div align="center">

![Github stars](https://img.shields.io/github/stars/kdalton0518/kdalton-portfolio?style=flat-square)
![Github Forks](https://img.shields.io/github/forks/kdalton0518/kdalton-portfolio?style=flat-square)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kdalton0518/kdalton-portfolio?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/kdalton0518/kdalton-portfolio?style=flat-square)

</div>

## Tools Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://github.com/mdx-js/mdx)

- **Database**: [Supabase](https://supabase.com/)
- **Animations**: [Framer Motion](https://framer.com/motion)
- **Deployment**: [Vercel](https://vercel.com)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Plugins**: [rehype](https://github.com/rehypejs/rehype)
- **Analytics**: [Google Analytics](https://analytics.google.com/analytics/web/)
- [SWR](https://swr.vercel.app/)
- [Email.js](https://www.emailjs.com/)
- [React Toastify](https://github.com/fkhadra/react-toastify)

## Run Locally

Clone the project:

```bash
git clone https://github.com/kdalton018/kdalton-portfolio.git
```

Go to the project directory:

```bash
cd kdalton-portfolio
```

Install dependencies

```bash
yarn
# or
npm install
```

Start the server:

```bash
yarn dev
# or
npm run dev
```

After that server should be running on [localhost:3000](http://localhost:3000)

> I am using [yarn](https://yarnpkg.com/) you can use [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)

> Warning: You could run into errors if you don't populate the `.env.local` with the correct values

## Setting up the Environment

Rename [`.env.example`](/.env.example) to `.env.local` and then you need to populate that with the respective values.

### Supabase Integration

I am using [Supabase](https://supabase.com/) with ISR to store all my projects and certificates for now. It provides an API that helps you to access the data. To access that data you need two things:

- `SUPABASE_URL`: Database URL.
- `SUPABASE_KEY`: It is safe to be used in a browser context.

**Steps-**

- To get these go to [Supabase](https://app.supabase.com/sign-in) and log in with your account.

- Click on **New Project** and fill all the fields.

- Click on **Create New Project**.

- Go to the [Settings](https://app.supabase.com/project/_/settings/general) page in the Dashboard.

- Click **API** in the sidebar.

- Find your API **URL** and **anon** key on this page.

- Now you can [Create table](https://app.supabase.com/project/_/editor) and start using it.

  But before you use this there was one issue I had when I was using this it was returning the empty array ([]). It was because of project policies. By default, no-one has access to the data. To fix that you can do the following:

- Go to [Policies](https://app.supabase.com/project/_/auth/policies).

- Select your Project.

- Click on **New Policy**.

- You will be presented with two options. You can choose either one. I chose the 1st option:

- After that, you will have four options as shown in the following image. You can choose according to your need. I only need the read access so I went with 1st option.

- Click on **Use this template**.

- Click on **Review**.

- Click on **Save Policy**

  After that, you will be able to access the data using [@supabase/supabase-js](https://www.npmjs.com/package/@supabase/supabase-js). Install it and you just set up your project with Supabase.

### GitHub Integration

To get `GITHUB_TOKEN` Follow these steps to generate a GitHub token that I am using fetch my GitHub details:

**Step 1: Accessing GitHub Developer Settings**

- Log in to your GitHub account.
- Click on your profile picture in the top-right corner of the page.
- From the drop-down menu, select Settings.

**Step 2: Navigating to Developer Settings**

In the left sidebar, scroll down and click on Developer settings.

**Step 3: Creating a New Personal Access Token**

- In the Developer settings page, click on Personal access tokens and then Click on Tokens (Classic).

- Next, click on the Generate new token button.

- After selecting the necessary permissions, click on the Generate token button at the bottom of the page.
- GitHub will generate a new token for you. Make sure to copy the token value.
- **Important**: Treat this token like a password and keep it secure. Do not share it publicly or commit it to a version control repository.

### Email Validation Integration

To get `EMAIL_VALIDATION_API` follow the following steps to get the `API_KEY` to validate the email address for the newsletter:

- You need to have an account on [RapidAPI](https://rapidapi.com/).
- If you have an account then you can just [subscribe](https://rapidapi.com/Top-Rated/api/e-mail-check-invalid-or-disposable-domain/pricing) the free version of [E-mail Check Invalid or Disposable Domain](https://rapidapi.com/Top-Rated/api/e-mail-check-invalid-or-disposable-domain/). Which will give you the 1000 request/month.

- Then you'll get the `API_KEY`, which you can store in your `.env.local`.

### Sanity Integration

- `SANITY_PROJECT_ID`:

  - Go to the [Sanity.io](<(https://www.sanity.io/)>) website using your web browser.
  - Login with you account/Create a new account.
  - After logging in, you'll be redirected to the Sanity.io dashboard.
  - If you have an existing project, you'll see it listed on the dashboard. Click on the project's name to access it.
  - Once you're inside the project, look at the browser's address bar. The URL should look something like this: `https://www.sanity.io/manage/project/your-project-id`
  - The your-project-id in the URL is your Sanity project ID. It's a unique identifier for your specific project.

  That's it! You've now obtained your Sanity project ID, which you can use for interacting with your Sanity project via its API or other integrations.