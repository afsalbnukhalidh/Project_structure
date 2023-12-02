using E_MAHAL_API.DTO;
using E_MAHAL_API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace E_MAHAL_API.Controllers
{
    [Route("api/[controller]/[action]")]
	[ApiController]
	public class HomeController : Controller
    {
        private readonly IHome _home;

        public HomeController(IHome home)
        {
            _home = home;
        }
        [HttpPost]
        public async Task<ResponseDto> AddMembers(MemberRequest member)
        {
            var responseDto = await _home.AddMembers(member);
            return responseDto;
        }
        [HttpPost]
        public MemberRequestList GetTableValues(int PageNumber)
        {
            int pageSize = Convert.ToInt32(10);
            int skip = PageNumber != 0 ? Convert.ToInt32(PageNumber) : 0;
            var response =  _home.GetTableValues(pageSize, skip);
            return response;
        }
    }
}
