"use client";

import React from 'react';
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { NewToDoForm } from "./_components/new-todo-form";
import { ToDoList } from "./_components/to-do-list";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { GenerateTodosForm } from "./_components/generate-todos-form";
import { Loader } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <Authenticated>
          <div className="bg-blue-600 p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">My To-Do List</h1>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "h-10 w-10"
                  }
                }}
              />
            </div>
          </div>
          <div className="p-6 space-y-6">
            <ToDoList />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Generate Todos</h2>
                <GenerateTodosForm />
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Add New Todo</h2>
                <NewToDoForm />
              </div>
            </div>
          </div>
        </Authenticated>
        <Unauthenticated>
          <div className="p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Your To-Do App</h2>
            <p className="text-xl text-gray-600 mb-8">Please sign in to manage your tasks and stay organized.</p>
            <SignInButton mode="modal">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                Sign In to Get Started
              </button>
            </SignInButton>
          </div>
        </Unauthenticated>
        <AuthLoading>
          <div className="flex justify-center items-center h-64">
            <Loader className="h-8 w-8 text-blue-600 animate-spin" />
            <span className="ml-2 text-lg text-gray-600">Loading your to-dos...</span>
          </div>
        </AuthLoading>
      </div>
    </div>
  );
}