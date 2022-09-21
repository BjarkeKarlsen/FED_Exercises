namespace Lesson_8.Models
{
    public class Agent
    {
        string? id;
        string? codeName;
        string? specialty;
        string? assignment;

        public Agent()
        {
        }

        public Agent(string aId, string aName, string aSpecialty, string aAssignment)
        {
            id = aId;
            codeName = aName;
            specialty = aSpecialty;
            assignment = aAssignment;
        }

        public string? ID
        {
            get
            {
                return id;
            }
            set
            {
                id = value;
            }
        }

        public string? CodeName
        {
            get
            {
                return codeName;
            }
            set
            {
                codeName = value;
            }
        }

        public string? Specialty 
        {
            get
            {
                return specialty;
            }
            set
            {
                specialty = value;
            }
        }

        public string? Assignment
        {
            get
            {
                return assignment;
            }
            set
            {
                assignment = value;
            }
        }
    }
}
