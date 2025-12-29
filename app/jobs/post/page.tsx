export default function PostJobPage(){
      return (
            <div className="max-w-2xl mx-auto">
                  <h1 className="text-xl font-bold mb-4">Make a Job Post</h1>
                  <form>
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
                              name="Localization"
                              id="Localization"
                              required
                              className="w-full border-2 border-gray-400 rounded-lg p-2"
                              />
                        </div>
                        <div className="mb-3">
                              <label className="text-gray-600">Job Type</label>
                              <select
                              name="type"
                              id="type"
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
                        <button className="w-full rouded-xl bg-blue-700 text-white font-bold text-center p-2">
                              Post Job
                        </button>
                  </form>
            </div>
      )
}