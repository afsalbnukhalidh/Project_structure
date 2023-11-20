using E_MAHAL_API.Data;
using E_MAHAL_API.DTO;
using E_MAHAL_API.Interfaces;
using E_MAHAL_API.Models;
using E_MAHAL_API.Requests;
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
        public async Task<List<MemberRequest>> GetTableValues(int PageNumber, int skip)
        {
            var DbCheck = _dbContext.Members.ToList();
            MemberRequest member = new MemberRequest() 
            { 
            };
            return member;
        }
    }
}
