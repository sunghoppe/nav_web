"use client"

export const blogPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js: A Comprehensive Guide",
    excerpt: "Learn how to build modern web applications with Next.js, from setup to deployment.",
    date: "April 2, 2023",
    category: "Development",
    coverImage: "/placeholder.svg?height=225&width=400",
    author: {
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    content: `
      # Getting Started with Next.js: A Comprehensive Guide

      Next.js has become one of the most popular React frameworks for building modern web applications. It provides a great developer experience with features like server-side rendering, static site generation, and API routes.

      ## Setting Up Your First Next.js Project

      To create a new Next.js project, you can use the following command:

      \`\`\`bash
      npx create-next-app my-next-app
      \`\`\`

      This will set up a new Next.js project with all the necessary dependencies and configuration.

      ## Key Features of Next.js

      ### 1. Server-Side Rendering (SSR)

      Next.js allows you to render your React components on the server before sending them to the client. This improves performance and SEO.

      ### 2. Static Site Generation (SSG)

      You can pre-render pages at build time, which can then be served as static HTML files.

      ### 3. API Routes

      Next.js allows you to create API endpoints as part of your application, making it easy to build full-stack applications.

      ## Conclusion

      Next.js provides a powerful framework for building modern web applications. Its features like SSR, SSG, and API routes make it a great choice for developers looking to build fast, SEO-friendly applications.
    `,
  },
  {
    slug: "monetizing-your-side-project",
    title: "Monetizing Your Side Project: Strategies for Indie Developers",
    excerpt: "Discover effective ways to turn your side project into a sustainable source of income.",
    date: "March 15, 2023",
    category: "Business",
    coverImage: "/placeholder.svg?height=225&width=400",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    content: `
      # Monetizing Your Side Project: Strategies for Indie Developers

      As an indie developer, turning your side project into a source of income can be both rewarding and challenging. Here are some effective strategies to monetize your work.

      ## Subscription Models

      Offering your product as a service with recurring payments is one of the most sustainable business models. It provides predictable revenue and allows you to continuously improve your product.

      ## Freemium Approach

      The freemium model allows users to access basic features for free while charging for premium features. This approach helps in user acquisition while still generating revenue.

      ## One-Time Purchases

      Selling your product for a one-time fee is straightforward and can be effective for certain types of applications.

      ## Open Source with Premium Support

      If you're passionate about open source, you can offer your product for free while charging for premium support, custom features, or enterprise versions.

      ## Conclusion

      There's no one-size-fits-all approach to monetization. The best strategy depends on your product, target audience, and personal goals. Experiment with different models to find what works best for you.
    `,
  },
  {
    slug: "building-accessible-web-applications",
    title: "Building Accessible Web Applications: A Guide for Developers",
    excerpt: "Learn how to make your web applications accessible to all users, including those with disabilities.",
    date: "February 28, 2023",
    category: "Accessibility",
    coverImage: "/placeholder.svg?height=225&width=400",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    content: `
      # Building Accessible Web Applications: A Guide for Developers

      Web accessibility is about making websites usable for everyone, including people with disabilities. Here's how you can make your web applications more accessible.

      ## Semantic HTML

      Using semantic HTML elements like \`<nav>\`, \`<main>\`, \`<article>\`, and \`<button>\` helps screen readers understand your content.

      ## Keyboard Navigation

      Ensure that all interactive elements are accessible via keyboard navigation. Users should be able to tab through your application logically.

      ## ARIA Attributes

      ARIA (Accessible Rich Internet Applications) attributes provide additional information to assistive technologies when HTML is not sufficient.

      ## Color Contrast

      Ensure sufficient color contrast between text and background to make content readable for users with visual impairments.

      ## Testing

      Regularly test your application with screen readers and keyboard navigation to identify and fix accessibility issues.

      ## Conclusion

      Building accessible web applications is not just about compliance with standards; it's about creating inclusive experiences for all users. By following these guidelines, you can make your web applications more accessible and user-friendly.
    `,
  },
  {
    slug: "optimizing-performance-in-react-applications",
    title: "Optimizing Performance in React Applications",
    excerpt: "Discover techniques to improve the performance of your React applications for a better user experience.",
    date: "January 20, 2023",
    category: "Performance",
    coverImage: "/placeholder.svg?height=225&width=400",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    content: `
      # Optimizing Performance in React Applications

      Performance optimization is crucial for providing a smooth user experience in React applications. Here are some techniques to improve performance.

      ## Code Splitting

      Code splitting allows you to split your code into smaller chunks that can be loaded on demand, reducing the initial load time.

      \`\`\`jsx
      import { lazy, Suspense } from 'react';

      const LazyComponent = lazy(() => import('./LazyComponent'));

      function App() {
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        );
      }
      \`\`\`

      ## Memoization

      Use React's memoization features like \`React.memo\`, \`useMemo\`, and \`useCallback\` to prevent unnecessary re-renders.

      \`\`\`jsx
      import { useMemo, useCallback } from 'react';

      function ExpensiveComponent({ data, onItemClick }) {
        // Memoize expensive calculations
        const processedData = useMemo(() => {
          return data.map(item => processItem(item));
        }, [data]);

        // Memoize callback functions
        const handleItemClick = useCallback((item) => {
          onItemClick(item);
        }, [onItemClick]);

        return (
          // Component JSX
        );
      }
      \`\`\`

      ## Virtual List

      For long lists, use a virtual list library like \`react-window\` or \`react-virtualized\` to render only the items that are currently visible.

      ## Image Optimization

      Optimize images by using proper formats, sizes, and lazy loading.

      ## Conclusion

      Performance optimization is an ongoing process. Regularly profile your application to identify bottlenecks and apply these techniques to improve performance.
    `,
  },
  {
    slug: "designing-effective-user-interfaces",
    title: "Designing Effective User Interfaces: Principles and Best Practices",
    excerpt:
      "Learn the key principles and best practices for designing user interfaces that are both beautiful and functional.",
    date: "December 10, 2022",
    category: "Design",
    coverImage: "/placeholder.svg?height=225&width=400",
    author: {
      name: "Michael Wong",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    content: `
      # Designing Effective User Interfaces: Principles and Best Practices

      Designing effective user interfaces is about creating experiences that are both visually appealing and functional. Here are some key principles and best practices.

      ## Consistency

      Maintain consistency in design elements, interactions, and behaviors throughout your application. This helps users learn and predict how to interact with your interface.

      ## Hierarchy

      Establish a clear visual hierarchy to guide users through your interface. Use size, color, and spacing to indicate the importance of elements.

      ## Feedback

      Provide clear feedback for user actions. This can be visual, auditory, or haptic feedback that confirms that an action has been recognized.

      ## Simplicity

      Keep your interface simple and focused. Remove unnecessary elements and streamline user flows to reduce cognitive load.

      ## Accessibility

      Design with accessibility in mind. Ensure that your interface is usable by people with different abilities and in different contexts.

      ## Conclusion

      Designing effective user interfaces is a balance between aesthetics and functionality. By following these principles and best practices, you can create interfaces that are both beautiful and usable.
    `,
  },
  {
    slug: "introduction-to-web3-development",
    title: "Introduction to Web3 Development: Building Decentralized Applications",
    excerpt:
      "Get started with Web3 development and learn how to build decentralized applications on blockchain platforms.",
    date: "November 5, 2022",
    category: "Blockchain",
    coverImage: "/placeholder.svg?height=225&width=400",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    content: `
      # Introduction to Web3 Development: Building Decentralized Applications

      Web3 represents the next evolution of the internet, focusing on decentralization and blockchain technology. This guide will help you get started with Web3 development.

      ## Understanding Web3

      Web3 refers to decentralized applications built on blockchain technology. Unlike traditional web applications, Web3 apps (dApps) operate on a peer-to-peer network rather than centralized servers.

      ## Key Technologies

      ### Blockchain

      Blockchain is a distributed ledger technology that forms the foundation of Web3. Popular blockchain platforms for development include Ethereum, Solana, and Polygon.

      ### Smart Contracts

      Smart contracts are self-executing contracts with the terms directly written into code. They automatically execute transactions when predefined conditions are met.

      ### Web3 Libraries

      Libraries like ethers.js and web3.js provide tools for interacting with blockchain networks from JavaScript applications.

      ## Building Your First dApp

      To build a decentralized application, you'll need to:

      1. Set up a development environment
      2. Write and deploy smart contracts
      3. Create a frontend that interacts with your contracts
      4. Connect to wallets like MetaMask for user authentication

      ## Conclusion

      Web3 development opens up new possibilities for creating trustless, decentralized applications. While the learning curve can be steep, the potential for innovation is enormous.
    `,
  },
]
