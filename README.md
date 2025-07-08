# Pixora 🎨

*A modern, full-stack media sharing platform for uploading, exploring, and managing personal photos and videos.*

---

## 🌟 Features

- **📱 Responsive Design** - Works seamlessly across desktop and mobile devices
- **🔐 Secure Authentication** - JWT-based user authentication and authorization
- **☁️ Cloud Storage** - Reliable media hosting with Cloudinary integration
- **🎯 User-Friendly Interface** - Clean, intuitive UI built with React and TailwindCSS
- **⚡ Fast Performance** - Optimized loading and seamless user experience
- **🔍 Media Discovery** - Explore and discover content from the community

---

## 🛠 Tech Stack

### Frontend
- **React** - Component-based UI library
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling

### File Handling & Storage
- **Multer** - Middleware for handling multipart/form-data
- **Cloudinary** - Cloud-based media management and CDN

### Authentication & Security
- **JWT** - JSON Web Tokens for secure authentication
- **bcrypt** - Password hashing and security

---

## 🚧 Development Status

> **⚠️ Early Development Phase**
> 
> Pixora is currently in **version 0.x** and under active development. The application is **not production-ready** and may contain bugs or incomplete features.
> 
> **👥 Contributions Welcome!** - We encourage developers to contribute to the project.

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Cloudinary account

### 1. Clone the Repository

```bash
git clone https://github.com/smitraut/pixora.git
cd pixora
```

### 2. Install Dependencies

#### Backend Setup
```bash
cd server
npm install
```

#### Frontend Setup
```bash
cd ../client
npm install
```

### 3. Environment Configuration

Create a `.env` file in the `server/` directory:

```env
# Server Configuration
PORT=7007
NODE_ENV=development

# Database
MONGO_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Optional: Client URL for CORS
CLIENT_URL=http://localhost:5173
```

### 4. Database Setup

Make sure MongoDB is running locally or configure your cloud MongoDB connection string in the `.env` file.

---

## 🚀 Running the Application

### Development Mode

Open two terminal windows:

#### Terminal 1 - Backend Server
```bash
cd server
npm run dev
```
*Server will run on http://localhost:7007*

#### Terminal 2 - Frontend Client
```bash
cd client
npm run dev
```
*Client will run on http://localhost:5173*

### Production Build

```bash
# Build frontend
cd client
npm run build

# Start production server
cd ../server
npm start
```

---

## 📁 Project Structure

```
pixora/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   └── styles/        # Global styles
│   ├── public/            # Static assets
│   └── package.json
├── server/                # Express backend
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── utils/            # Server utilities
│   └── package.json
├── README.md
└── .gitignore
```

---

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Media Management
- `POST /api/media/upload` - Upload media files
- `GET /api/media` - Get user's media
- `GET /api/media/:id` - Get specific media
- `DELETE /api/media/:id` - Delete media
- `PUT /api/media/:id` - Update media details

### Public Feed
- `GET /api/feed` - Get public media feed
- `POST /api/media/:id/like` - Like media
- `POST /api/media/:id/comment` - Add comment

---

## 📱 File Upload Specifications

### Supported Formats
- **Images**: JPG, JPEG, PNG, GIF, WebP
- **Videos**: MP4, WebM, AVI (max 100MB)

### Upload Process
1. Files are processed through Multer middleware
2. Uploaded to Cloudinary for storage and optimization
3. Metadata stored in MongoDB
4. Secure URLs generated for access


## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure responsive design for UI changes

### Areas for Contribution
- 🐛 Bug fixes and improvements
- ✨ New features and enhancements
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- 🔧 Performance optimizations
- 🧪 Testing coverage

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Thanks to all contributors who help improve Pixora
- Built with love using modern web technologies
- Inspired by the need for a simple, elegant media sharing platform

---

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/smitraut/pixora/issues)
- **Discussions**: [GitHub Discussions](https://github.com/smitraut/pixora/discussions)
- **Email**: [Project Maintainer](mailto:smitraut@example.com)

---

*Happy sharing with Pixora! 🎨📸*