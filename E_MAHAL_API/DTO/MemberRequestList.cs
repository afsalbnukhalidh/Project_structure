namespace E_MAHAL_API.DTO
{
    public class MemberRequestList
    {
        public int count { get; set; }
        public string message { get; set; }
        public List<MemberRequest> members { get; set;}
    }
}
