
const JobPost = require('../model/JobPost');
const Text = require('../model/Text');

exports.getAllJobPost = async (req, res) => {
    try {
      const jobPosts = await JobPost.find();
      res.json(jobPosts);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }

// exports.getRandomUnannotatedJobPost = async (req, res) => {
//   try {
//     const jobPosts = await Text.aggregate([
//       {
//         $lookup: {
//           from: 'annotation',
//           localField: '_id',
//           foreignField: 'Text',
//           as: 'annotation',
//         },
//       },
//       {
//         $match: { 'annotation.0': { $exists: false } },
//       },
//       { $sample: { size: 1 } },
//     ]);

//     res.json(jobPosts[0]);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

exports.getRandomUnannotatedJobPost = async (req, res) =>{
  const jobPostsWithoutAnnotations = await Text.aggregate([
    
    {
      // Left outer join (lookup) to find annotations for each jobpost
      $lookup: {
        from: 'annotations',
        localField: '_id',
        foreignField: 'text_id',
        as: 'annotations'
      }
    },
    {
      // Match documents that are of type 'jobpost'
      $match: { __t: 'JobPost', annotations: { $size: 0 }  }
    },{
      $limit: 1
    }
  ]);
  res.json(
    jobPostsWithoutAnnotations.pop()
  )

}