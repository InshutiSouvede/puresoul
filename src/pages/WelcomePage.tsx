import React from "react";
import { BookOpen, UserCircle2, CheckCircle2} from "lucide-react";
import { Link } from "react-router";
import ExpertsCard from "../components/ExpertsCard";
import BooksCard from "../components/BooksCard";
import UseGetAllBooks from "../hooks/UseGetAllBooks";
import UseGetAllExperts from "../hooks/UseGetAllExperts";
import { otherPsychologistProfiles, otherRecommendedBooks } from "../utils/data";


const PureSoulWelcomePage: React.FC = () => {
  const [{data:booksData,error:recommendedBooksError, loading:booksLoading}] = UseGetAllBooks()
  const [{data:expertsData,error:psychologistProfilesError, loading: expertsLoading}] = UseGetAllExperts()
  let recommendedBooks = booksData?.data
  let psychologistProfiles = expertsData?.data
  if(recommendedBooksError || psychologistProfilesError){
    recommendedBooks = otherRecommendedBooks;
    psychologistProfiles = otherPsychologistProfiles
  }
  if(booksLoading || expertsLoading) return <h1>Loading...</h1>
  
   console.log("psychologists ", psychologistProfiles)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
   
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-purple-800 mb-4">PureSoul</h1>
        <p className="text-xl text-gray-600">
          Your Compassionate Mental Health Companion
        </p>
      </header>

      {/* About Us Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 mb-12">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6 text-center">
          About PureSoul
        </h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-gray-700 mb-4">
              PureSoul is dedicated to providing compassionate, accessible
              mental health support. Our mission is to empower individuals on
              their journey to emotional wellness through personalized
              resources, expert guidance, and a supportive community.
            </p>
            <p className="text-gray-700">
              We believe in holistic mental health care that combines
              professional insights, self-assessment tools, and continuous
              learning.
            </p>
          </div>
          <img
            src="https://media.istockphoto.com/id/1357255073/vector/artificial-intelligence-abstract-artistic-human-head-portrait-made-of-dotted-particles-array.jpg?s=612x612&w=0&k=20&c=T9nXK76OG_h38NblhUNmsvD0nVK19XRBi3Kz8uDjhEU="
            alt="PureSoul Mission"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
      <div className="mb-12 max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl p-6  ">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
            <CheckCircle2 className="mr-3 text-purple-500" />
            Mental Health Assessments
          </h2>
          
            <Link 
              to="/assessments" 
              className="block w-full bg-purple-600 text-white px-6 py-4 rounded-lg text-center hover:bg-purple-700 transition"
            >
              Start Your Assessment
            </Link>
            <p className="text-gray-600 text-sm mt-3 text-center">
              Take a comprehensive mental health screening
            </p>
          
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Recommended Books Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
            <BookOpen className="mr-3 text-purple-500" />
            Recommended Books
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recommendedBooks && recommendedBooks.map(book => (
              <BooksCard key={book.id} {...book} />
            ))}
            {!recommendedBooks && <h1 className="capitalize">Recommendations are on way</h1>}
          </div>
        </div>

        {/* Expert Psychologists Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
            <UserCircle2 className="mr-3 text-purple-500" />
            Our Experts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {psychologistProfiles &&psychologistProfiles.map(profile => (
              <ExpertsCard key={profile.id} {...profile} />
            ))}
            {!psychologistProfiles && <h1>Experts Will Join Us Soon</h1>}
          </div>
        </div>
      

      {/* Discord Community */}
      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="mr-3 text-purple-500"
              >
                <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-7.008-1.728-7.008-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692.012-2.424.048l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.984-.948 3.12-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.144-1.728 7.008 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.41-2.1-1.41l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.23 3.096.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"/>
              </svg>
              Community
            </h2>
            <p className="text-gray-600 mb-4">
              Join our supportive Discord community and connect with others on their mental health journey.
            </p>
            <a 
              href="https://discord.gg/puresoul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition flex items-center justify-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="mr-2"
              >
                <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-7.008-1.728-7.008-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692.012-2.424.048l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.984-.948 3.12-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.144-1.728 7.008 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.41-2.1-1.41l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.23 3.096.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"/>
              </svg>
              Join Our Discord
            </a>
          </div>
     
      </div>
    </div>
  );
};

export default PureSoulWelcomePage;
