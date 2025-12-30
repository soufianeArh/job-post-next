"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, FormEvent } from "react";


export default async function PostJobPage(){

      const submitHandler = async (e: FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            const formData = new FormData(e.currentTarget)
            const data = {
                  title:formData.get("title"),
                  company:formData.get("company"),
                  localization:formData.get("localization"),
                  type:formData.get("type"),
                  description:formData.get("description")
            }
            console.log(data)
            //prisma
      } 
      return (
            <div className="max-w-2xl mx-auto">
                  <h1 className="text-xl font-bold mb-4">Make a Job Post</h1>
                  <form onSubmit={submitHandler}>
                        <div className="mb-3">
                              <label className="text-gray-600">Job Title</label>
                              <input
                              type="text"
                              placeholder="inset title"
                              name="title"
                              id="title"
                              required
                              className="w-full border-2 border-gray-400 rounded-lg p-2"
                              />
                        </div>
                        <div className="mb-3">
                              <label className="text-gray-600">Company</label>
                              <input
                              type="text"
                              placeholder="inset company"
                              name="company"
                              id="company"
                              required
                              className="w-full border-2 border-gray-400 rounded-lg p-2"
                              />
                        </div>
                        <div className="mb-3">
                              <label className="text-gray-600">Localization</label>
                              <input
                              type="text"
                              placeholder="inset Localization"
                              name="localization"
                              id="localization"
                              required
                              className="w-full border-2 border-gray-400 rounded-lg p-2"
                              />
                        </div>
                        <div className="mb-3">
                              <label className="text-gray-600">Job Type</label>
                              <select
                              name="type"
                              id="type"
                              required
                              className="w-full border-2 border-gray-400 rounded-lg p-2"
                              >
                                    <option value="">Select a type</option>
                                    <option value="full-time">Full Time</option>
                                    <option value="part-time">Part Time</option>
                                    <option value="contractor">Contractor</option>
                                    <option value="internship">Internship</option>
                              </select>
                        </div>
                        <div className="mb-3">
                              <label className="text-gray-600">Description</label>
                              <textarea
                              id="description"
                              name="description"
                              required
                              rows={3}
                              className="w-full border-2 border-gray-400 rounded-lg p-2"
                              />
                        </div>
                        <button
                        className="w-full rouded-xl bg-blue-700 text-white font-bold text-center p-2">
                              Post Job
                        </button>
                  </form>
            </div>
      )
}