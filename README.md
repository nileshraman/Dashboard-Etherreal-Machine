# Next.js Manufacturing Dashboard

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
---------------------------------------------------------------------------------------------
## Necessary APIs

I've created a README file in Markdown format that outlines the necessary APIs for the Manufacturing Dashboard application. The README includes:

1.Overall Statistics API
2.Productivity API
3.Productivity Trend API
4.Alarms API
5.Machines Status API

The following key components need to be implemented:

1. Header Statistics: Displays percentages (e.g., Active, Setup, Stall), Machine Hours, Time Stalled, and Parts Made.
2. Productivity Chart: Pie chart showing different states (Active, Loading, Setup, Stalled).
3. Performance Graph: A line graph showing performance over time.
4. Alarms: A list displaying machine alarms.
5. Machine Details: Detailed information about machines, including status, cycle progress, production progress, and parts.

## APIs to Make the Application Dynamic

Here’s a list of possible APIs and their corresponding JSON responses:

### Overall Statistics API

Endpoint: `/api/overall-stats`

Sample Response:
```json
{
  "active_percentage": 20,
  "setup_percentage": 0,
  "stall_percentage": 80,
  "machine_hours": 10.4,
  "time_stalled": 502,
  "parts_made": 0
}
```

### Productivity API

Endpoint: `/api/productivity`

Sample Response:
```json
{
  "active_time": 124,
  "loading_time": 0,
  "setup_time": 0,
  "stalled_time": 502
}
```

### Productivity Trend API

Endpoint: `/api/productivity-trend`

Sample Response:
```json
{
  "dates": ["07/26", "07/27", "07/28", "07/29"],
  "values": [5, 4, 8, 20]
}
```

### Alarms API

Endpoint: `/api/alarms`

Sample Response:
```json
{
  "alarms": [
    {
      "machine": "HALO - 01",
      "message": "Alarm on Machine 1: 501 - (X1)- OVERTRAVEL ( SOFT 1 )",
      "timestamp": "07/29 09:03"
    },
    {
      "machine": "HALO - 01",
      "message": "Machine 1 idle for 15 minutes",
      "timestamp": "07/29 08:59"
    },
    {
      "machine": "NIMBUS - 09",
      "message": "Alarm on NIMBUS: 500 - (Y)- OVERTRAVEL ( SOFT 1 )",
      "timestamp": "07/29 08:51"
    },
    {
      "machine": "NIMBUS - 09",
      "message": "Machine idle for 10 minutes",
      "timestamp": "07/29 08:48"
    }
  ]
}
```

### Machines Status API

Endpoint: `/api/machines-status`

Sample Response:
```json
{
  "machines": [
    {
      "name": "HALO - 01",
      "status": "IDLE",
      "cycle_progress": 100,
      "mode": "MDI",
      "program": "O9841",
      "tool": 1,
      "active_time": 8,
      "loading_time": 0,
      "setup_time": 0,
      "stalled_time": 490,
      "part_count": 188,
      "part_goal": 0,
      "spindle": 0,
      "production_progress": [
        {"type": "stalled", "duration": 490},
        {"type": "active", "duration": 8},
        {"type": "stalled", "duration": 2}
      ]
    },
    {
      "name": "NIMBUS - 09",
      "status": "ACTIVE",
      "cycle_progress": 100,
      "mode": "MEM",
      "program": "01_DRN",
      "tool": 8,
      "active_time": 116,
      "loading_time": 0,
      "setup_time": 0,
      "stalled_time": 11,
      "part_count": 1205,
      "part_goal": 7999,
      "spindle": 0,
      "production_progress": [
        {"type": "active", "duration": 116},
        {"type": "stalled", "duration": 11},
        {"type": "active", "duration": 73}
      ]
    }
  ]
}
```
