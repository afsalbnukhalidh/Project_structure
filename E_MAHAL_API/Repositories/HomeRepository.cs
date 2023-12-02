using E_MAHAL_API.Data;
using E_MAHAL_API.DTO;
using E_MAHAL_API.Interfaces;
using E_MAHAL_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace E_MAHAL_API.Repositories
{
    public class HomeRepository : IHome
    {
        private readonly EMahalDbContext _dbContext;

        public HomeRepository(EMahalDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<ResponseDto> AddMembers(MemberRequest member)
        {
            ResponseDto response = new ResponseDto();
            try
            {
                Member memb = new Member
                {
                    Name = member.Name,
                    Address = member.Address,
                    HomeNumber = member.HomeNumber,
                    Contact = member.Contact
                };
                await _dbContext.AddAsync(memb);
                await _dbContext.SaveChangesAsync();

                response.result = "Success";
                response.message = "Data saved successfully";
            }
            catch (Exception ex)
            {
                response.message = "Error: " + ex.Message;
            }
            return response;
        }
        public MemberRequestList GetTableValues(int pageSize, int skip)
        {
            MemberRequestList result = new MemberRequestList();
            var list = _dbContext.Members
                 .Select(member => new MemberRequest
                 {
                     Name= member.Name,
                     Address = member.Address,
                     HomeNumber = member.HomeNumber,
                     Contact = member.Contact
                 }).Skip(pageSize * (skip - 1)).Take(pageSize).ToList();
            result.count =_dbContext.Members.Count();
            result.members = list;
            result.message = "success";
            return result;
        }
    }
}
