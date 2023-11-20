using E_MAHAL_API.DTO;
using E_MAHAL_API.Models;
using E_MAHAL_API.Requests;
using Microsoft.AspNetCore.Mvc;

namespace E_MAHAL_API.Interfaces
{
    public interface IHome
    {
        Task<ResponseDto> AddMembers(MemberRequest member);
        Task<MemberRequest> GetTableValues(int PageNumber,int skip);
    }
}
