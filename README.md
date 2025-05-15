<p>
Here is the requested code take-home from Fetch [https://github.com/fetch-rewards/receipt-processor-challenge/tree/main](https://github.com/fetch-rewards/receipt-processor-challenge/tree/main)
</p>
<p>
  Some notes here from my time looking at all these
  <ol> 
      <li>The use of DI for the rules was probably overkill for the ACTUAL usecase here, but since we're focused on showing off production stuff, I figured I might as well add it since in a real world, each "Rule" would probably have us doing a whole set of things like reaching out to 3rd party services, checking the DB, etc etc
      </li>
      <li>
      I added in a few extra methods like a GetAll, Clear all, and Delete One for the controller methods because I just felt that they were needed for this example, plus it was fun.
    </li>
      <li>I've left in a lot the console.logs, just commented out (You can probably track my troubleshooting by just following those), this is mainly to show the way I debugged to different parts of the API as I went through it
      </li>
      <li>To prevent "abuse" by customers, I also put a raw point cap in place, then chickened out that you might have tests that are in the MILLIONS of points and removed it, however, in production, I would have firmly believed in making sure that there was a cap on each "rule" and/or a total cap on the amount of points gained
      </li>
      <li>While we don't allow negative numbers on the items due to the spec, I feel that it probably should have been to account for VOIDED things, but then we'd also have to find a match on the positive side as well, and that's well out of scope for this "ticket" :) 
    </li>
    <li>
      By default, I've allowed the error message to come through so vendors know what errors are going wrong.
    </li>
    <li>
      I was using Postman to test this, so I figured I might as well upload the Postman collection for giggles.
    </li>
  </ol>
</p>
